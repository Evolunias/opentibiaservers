import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-commands');
}

export default function OtmadnessCommandsKeywordPage() {
  return <StaticKeywordPage slug="otmadness-commands" />;
}

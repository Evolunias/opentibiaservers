import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-chile-servers');
}

export default function OtmadnessChileServersKeywordPage() {
  return <StaticKeywordPage slug="otmadness-chile-servers" />;
}

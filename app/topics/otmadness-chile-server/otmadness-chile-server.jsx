import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-chile-server');
}

export default function OtmadnessChileServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-chile-server" />;
}

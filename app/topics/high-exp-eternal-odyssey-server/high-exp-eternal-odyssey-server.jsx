import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-eternal-odyssey-server');
}

export default function HighExpEternalOdysseyServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-eternal-odyssey-server" />;
}

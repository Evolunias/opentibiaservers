import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-eternal-odyssey-server');
}

export default function LowExpEternalOdysseyServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-eternal-odyssey-server" />;
}

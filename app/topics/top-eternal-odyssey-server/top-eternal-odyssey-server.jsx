import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-eternal-odyssey-server');
}

export default function TopEternalOdysseyServerKeywordPage() {
  return <StaticKeywordPage slug="top-eternal-odyssey-server" />;
}

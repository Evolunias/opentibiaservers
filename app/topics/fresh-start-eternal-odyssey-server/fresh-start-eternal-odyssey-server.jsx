import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-eternal-odyssey-server');
}

export default function FreshStartEternalOdysseyServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-eternal-odyssey-server" />;
}

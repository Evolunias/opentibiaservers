import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-oxygenot-server');
}

export default function FreshStartOxygenotServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-oxygenot-server" />;
}

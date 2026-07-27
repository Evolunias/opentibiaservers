import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-oxygenot-server');
}

export default function NewOxygenotServerKeywordPage() {
  return <StaticKeywordPage slug="new-oxygenot-server" />;
}

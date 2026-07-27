import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-oxygenot-server');
}

export default function ActiveOxygenotServerKeywordPage() {
  return <StaticKeywordPage slug="active-oxygenot-server" />;
}

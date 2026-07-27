import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-yurots-server');
}

export default function ActiveYurotsServerKeywordPage() {
  return <StaticKeywordPage slug="active-yurots-server" />;
}

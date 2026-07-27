import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-yurots-server');
}

export default function OfficialYurotsServerKeywordPage() {
  return <StaticKeywordPage slug="official-yurots-server" />;
}

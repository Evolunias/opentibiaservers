import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-yurots-ot-server');
}

export default function OfficialYurotsOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-yurots-ot-server" />;
}

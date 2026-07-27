import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-thaisot-ot-server');
}

export default function OfficialThaisotOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-thaisot-ot-server" />;
}

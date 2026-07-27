import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-pvp-server-brazil');
}

export default function BlazeraPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="blazera-pvp-server-brazil" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-pvp-server-mexico');
}

export default function BlazeraPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="blazera-pvp-server-mexico" />;
}

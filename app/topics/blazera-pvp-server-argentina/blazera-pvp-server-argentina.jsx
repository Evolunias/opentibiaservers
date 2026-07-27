import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-pvp-server-argentina');
}

export default function BlazeraPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="blazera-pvp-server-argentina" />;
}

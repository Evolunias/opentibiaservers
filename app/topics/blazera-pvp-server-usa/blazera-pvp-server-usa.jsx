import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-pvp-server-usa');
}

export default function BlazeraPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="blazera-pvp-server-usa" />;
}

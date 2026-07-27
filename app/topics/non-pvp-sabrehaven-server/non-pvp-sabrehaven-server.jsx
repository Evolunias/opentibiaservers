import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-sabrehaven-server');
}

export default function NonPvpSabrehavenServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-sabrehaven-server" />;
}

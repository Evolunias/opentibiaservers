import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-sabrehaven-server');
}

export default function PvpeSabrehavenServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-sabrehaven-server" />;
}

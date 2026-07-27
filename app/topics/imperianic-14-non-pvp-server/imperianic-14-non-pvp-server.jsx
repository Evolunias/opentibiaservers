import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-14-non-pvp-server');
}

export default function Imperianic14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-14-non-pvp-server" />;
}

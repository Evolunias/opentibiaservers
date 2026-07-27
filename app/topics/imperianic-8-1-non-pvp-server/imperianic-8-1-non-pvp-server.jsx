import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-8-1-non-pvp-server');
}

export default function Imperianic81NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-8-1-non-pvp-server" />;
}

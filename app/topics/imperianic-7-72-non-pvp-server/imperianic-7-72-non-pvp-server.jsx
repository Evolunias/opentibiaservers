import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-7-72-non-pvp-server');
}

export default function Imperianic772NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-7-72-non-pvp-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-7-4-pvp-server');
}

export default function Imperianic74PvpServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-7-4-pvp-server" />;
}

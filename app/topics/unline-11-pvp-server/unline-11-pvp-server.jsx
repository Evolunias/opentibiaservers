import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-11-pvp-server');
}

export default function Unline11PvpServerKeywordPage() {
  return <StaticKeywordPage slug="unline-11-pvp-server" />;
}

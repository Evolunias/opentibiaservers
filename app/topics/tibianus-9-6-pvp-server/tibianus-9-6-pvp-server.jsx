import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-9-6-pvp-server');
}

export default function Tibianus96PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-9-6-pvp-server" />;
}

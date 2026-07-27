import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-10-0-non-pvp-server');
}

export default function Tibianus100NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-10-0-non-pvp-server" />;
}

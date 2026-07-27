import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-10-0-non-pvp-server');
}

export default function Shadowcores100NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-10-0-non-pvp-server" />;
}

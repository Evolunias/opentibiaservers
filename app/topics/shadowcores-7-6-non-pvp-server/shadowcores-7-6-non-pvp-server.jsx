import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-6-non-pvp-server');
}

export default function Shadowcores76NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-6-non-pvp-server" />;
}

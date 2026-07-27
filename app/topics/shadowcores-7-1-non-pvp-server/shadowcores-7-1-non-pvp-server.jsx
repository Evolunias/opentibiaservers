import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-1-non-pvp-server');
}

export default function Shadowcores71NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-1-non-pvp-server" />;
}

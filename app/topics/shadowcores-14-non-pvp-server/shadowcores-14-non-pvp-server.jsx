import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-14-non-pvp-server');
}

export default function Shadowcores14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-14-non-pvp-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-6-non-pvp-server');
}

export default function Shadowcores86NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-6-non-pvp-server" />;
}

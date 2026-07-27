import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-7-1-non-pvp-server');
}

export default function Canob71NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="canob-7-1-non-pvp-server" />;
}

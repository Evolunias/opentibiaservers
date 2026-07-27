import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-7-1-non-pvp-server');
}

export default function Realesta71NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-7-1-non-pvp-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-7-1-non-pvp-server');
}

export default function Nostalther71NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-7-1-non-pvp-server" />;
}

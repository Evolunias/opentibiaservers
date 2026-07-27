import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-13-non-pvp-server');
}

export default function Nostalther13NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-13-non-pvp-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-10-0-non-pvp-server');
}

export default function Nostalther100NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-10-0-non-pvp-server" />;
}

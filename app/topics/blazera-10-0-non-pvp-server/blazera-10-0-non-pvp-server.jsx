import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-10-0-non-pvp-server');
}

export default function Blazera100NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-10-0-non-pvp-server" />;
}

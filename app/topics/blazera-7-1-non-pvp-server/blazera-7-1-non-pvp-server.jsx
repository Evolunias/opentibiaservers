import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-1-non-pvp-server');
}

export default function Blazera71NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-1-non-pvp-server" />;
}

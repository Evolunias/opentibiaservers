import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-6-non-pvp-server');
}

export default function Luminera86NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-6-non-pvp-server" />;
}

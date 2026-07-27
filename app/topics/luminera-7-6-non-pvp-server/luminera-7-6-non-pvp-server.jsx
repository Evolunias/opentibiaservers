import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-7-6-non-pvp-server');
}

export default function Luminera76NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-7-6-non-pvp-server" />;
}

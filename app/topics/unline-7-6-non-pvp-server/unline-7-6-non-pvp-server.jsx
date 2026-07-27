import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-7-6-non-pvp-server');
}

export default function Unline76NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="unline-7-6-non-pvp-server" />;
}

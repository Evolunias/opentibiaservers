import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-11-non-pvp-server');
}

export default function Unline11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="unline-11-non-pvp-server" />;
}

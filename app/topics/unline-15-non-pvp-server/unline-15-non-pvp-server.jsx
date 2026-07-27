import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-15-non-pvp-server');
}

export default function Unline15NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="unline-15-non-pvp-server" />;
}

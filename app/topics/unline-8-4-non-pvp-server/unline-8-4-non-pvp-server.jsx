import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-8-4-non-pvp-server');
}

export default function Unline84NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="unline-8-4-non-pvp-server" />;
}

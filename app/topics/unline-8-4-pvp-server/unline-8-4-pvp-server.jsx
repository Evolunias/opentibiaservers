import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-8-4-pvp-server');
}

export default function Unline84PvpServerKeywordPage() {
  return <StaticKeywordPage slug="unline-8-4-pvp-server" />;
}

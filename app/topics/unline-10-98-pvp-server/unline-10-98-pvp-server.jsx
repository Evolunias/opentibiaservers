import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-10-98-pvp-server');
}

export default function Unline1098PvpServerKeywordPage() {
  return <StaticKeywordPage slug="unline-10-98-pvp-server" />;
}

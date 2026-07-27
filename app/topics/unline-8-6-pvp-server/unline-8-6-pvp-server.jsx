import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-8-6-pvp-server');
}

export default function Unline86PvpServerKeywordPage() {
  return <StaticKeywordPage slug="unline-8-6-pvp-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-7-4-non-pvp-server');
}

export default function Cyntara74NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-7-4-non-pvp-server" />;
}

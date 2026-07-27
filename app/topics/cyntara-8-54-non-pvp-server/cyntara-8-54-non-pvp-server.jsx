import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-54-non-pvp-server');
}

export default function Cyntara854NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-54-non-pvp-server" />;
}

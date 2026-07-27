import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-11-non-pvp-server');
}

export default function Originaltibia11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-11-non-pvp-server" />;
}

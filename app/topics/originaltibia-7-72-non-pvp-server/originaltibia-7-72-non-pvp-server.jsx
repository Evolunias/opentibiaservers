import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-7-72-non-pvp-server');
}

export default function Originaltibia772NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-7-72-non-pvp-server" />;
}

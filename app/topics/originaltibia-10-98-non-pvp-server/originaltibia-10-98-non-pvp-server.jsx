import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-10-98-non-pvp-server');
}

export default function Originaltibia1098NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-10-98-non-pvp-server" />;
}

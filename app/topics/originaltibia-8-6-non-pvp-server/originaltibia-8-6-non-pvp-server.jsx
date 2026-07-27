import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-6-non-pvp-server');
}

export default function Originaltibia86NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-6-non-pvp-server" />;
}

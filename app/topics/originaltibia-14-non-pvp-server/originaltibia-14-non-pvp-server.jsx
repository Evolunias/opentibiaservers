import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-14-non-pvp-server');
}

export default function Originaltibia14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-14-non-pvp-server" />;
}

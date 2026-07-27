import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-15-non-pvp-server');
}

export default function Originaltibia15NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-15-non-pvp-server" />;
}

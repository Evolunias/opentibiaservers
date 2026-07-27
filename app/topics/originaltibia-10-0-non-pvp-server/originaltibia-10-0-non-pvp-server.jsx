import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-10-0-non-pvp-server');
}

export default function Originaltibia100NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-10-0-non-pvp-server" />;
}

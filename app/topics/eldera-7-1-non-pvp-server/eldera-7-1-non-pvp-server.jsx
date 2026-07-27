import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-1-non-pvp-server');
}

export default function Eldera71NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-1-non-pvp-server" />;
}

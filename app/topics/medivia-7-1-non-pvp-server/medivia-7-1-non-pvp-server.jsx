import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-7-1-non-pvp-server');
}

export default function Medivia71NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-7-1-non-pvp-server" />;
}

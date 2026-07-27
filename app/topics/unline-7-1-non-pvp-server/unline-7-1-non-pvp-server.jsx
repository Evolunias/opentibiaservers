import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-7-1-non-pvp-server');
}

export default function Unline71NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="unline-7-1-non-pvp-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-1-non-pvp-server');
}

export default function Tibijka71NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-1-non-pvp-server" />;
}

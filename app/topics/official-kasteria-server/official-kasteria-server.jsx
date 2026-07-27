import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-kasteria-server');
}

export default function OfficialKasteriaServerKeywordPage() {
  return <StaticKeywordPage slug="official-kasteria-server" />;
}

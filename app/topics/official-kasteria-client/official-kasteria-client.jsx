import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-kasteria-client');
}

export default function OfficialKasteriaClientKeywordPage() {
  return <StaticKeywordPage slug="official-kasteria-client" />;
}

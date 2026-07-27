import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-kasteria-login');
}

export default function OfficialKasteriaLoginKeywordPage() {
  return <StaticKeywordPage slug="official-kasteria-login" />;
}

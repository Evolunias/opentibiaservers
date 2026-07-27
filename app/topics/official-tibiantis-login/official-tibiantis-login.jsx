import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiantis-login');
}

export default function OfficialTibiantisLoginKeywordPage() {
  return <StaticKeywordPage slug="official-tibiantis-login" />;
}

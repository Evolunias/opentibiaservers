import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiantis-login');
}

export default function ActiveTibiantisLoginKeywordPage() {
  return <StaticKeywordPage slug="active-tibiantis-login" />;
}

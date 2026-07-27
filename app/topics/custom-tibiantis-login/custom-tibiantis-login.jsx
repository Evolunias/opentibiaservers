import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiantis-login');
}

export default function CustomTibiantisLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiantis-login" />;
}

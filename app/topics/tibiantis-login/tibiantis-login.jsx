import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-login');
}

export default function TibiantisLoginKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-login" />;
}

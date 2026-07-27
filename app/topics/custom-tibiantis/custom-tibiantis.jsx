import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiantis');
}

export default function CustomTibiantisKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiantis" />;
}

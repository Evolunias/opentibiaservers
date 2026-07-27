import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiantis');
}

export default function ActiveTibiantisKeywordPage() {
  return <StaticKeywordPage slug="active-tibiantis" />;
}

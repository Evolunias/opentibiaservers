import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-classicus-ots');
}

export default function PopularClassicusOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-classicus-ots" />;
}

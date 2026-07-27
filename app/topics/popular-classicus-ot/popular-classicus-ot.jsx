import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-classicus-ot');
}

export default function PopularClassicusOtKeywordPage() {
  return <StaticKeywordPage slug="popular-classicus-ot" />;
}

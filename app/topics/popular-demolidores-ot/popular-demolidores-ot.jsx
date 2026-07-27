import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-demolidores-ot');
}

export default function PopularDemolidoresOtKeywordPage() {
  return <StaticKeywordPage slug="popular-demolidores-ot" />;
}

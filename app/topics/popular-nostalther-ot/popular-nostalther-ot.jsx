import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nostalther-ot');
}

export default function PopularNostaltherOtKeywordPage() {
  return <StaticKeywordPage slug="popular-nostalther-ot" />;
}

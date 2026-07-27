import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nostalther-ots');
}

export default function PopularNostaltherOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-nostalther-ots" />;
}

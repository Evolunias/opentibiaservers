import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-thornia');
}

export default function PopularThorniaKeywordPage() {
  return <StaticKeywordPage slug="popular-thornia" />;
}

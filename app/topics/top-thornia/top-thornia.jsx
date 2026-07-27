import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-thornia');
}

export default function TopThorniaKeywordPage() {
  return <StaticKeywordPage slug="top-thornia" />;
}

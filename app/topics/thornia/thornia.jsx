import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia');
}

export default function ThorniaKeywordPage() {
  return <StaticKeywordPage slug="thornia" />;
}

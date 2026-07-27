import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-thornia');
}

export default function CurrentThorniaKeywordPage() {
  return <StaticKeywordPage slug="current-thornia" />;
}

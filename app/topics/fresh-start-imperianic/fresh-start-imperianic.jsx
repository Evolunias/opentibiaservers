import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-imperianic');
}

export default function FreshStartImperianicKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-imperianic" />;
}

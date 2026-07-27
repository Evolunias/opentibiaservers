import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-xanteria');
}

export default function FreshStartXanteriaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-xanteria" />;
}

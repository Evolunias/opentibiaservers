import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-xanteria');
}

export default function TopXanteriaKeywordPage() {
  return <StaticKeywordPage slug="top-xanteria" />;
}

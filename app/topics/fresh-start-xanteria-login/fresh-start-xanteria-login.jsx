import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-xanteria-login');
}

export default function FreshStartXanteriaLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-xanteria-login" />;
}

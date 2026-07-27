import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-xanteria-login');
}

export default function PopularXanteriaLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-xanteria-login" />;
}

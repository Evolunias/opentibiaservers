import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-xanteria-login');
}

export default function TopXanteriaLoginKeywordPage() {
  return <StaticKeywordPage slug="top-xanteria-login" />;
}

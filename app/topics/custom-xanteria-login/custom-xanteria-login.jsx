import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-xanteria-login');
}

export default function CustomXanteriaLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-xanteria-login" />;
}

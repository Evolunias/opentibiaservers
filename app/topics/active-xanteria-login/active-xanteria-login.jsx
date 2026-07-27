import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-xanteria-login');
}

export default function ActiveXanteriaLoginKeywordPage() {
  return <StaticKeywordPage slug="active-xanteria-login" />;
}

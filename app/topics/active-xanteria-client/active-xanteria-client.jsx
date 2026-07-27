import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-xanteria-client');
}

export default function ActiveXanteriaClientKeywordPage() {
  return <StaticKeywordPage slug="active-xanteria-client" />;
}

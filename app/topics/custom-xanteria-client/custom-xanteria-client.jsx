import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-xanteria-client');
}

export default function CustomXanteriaClientKeywordPage() {
  return <StaticKeywordPage slug="custom-xanteria-client" />;
}

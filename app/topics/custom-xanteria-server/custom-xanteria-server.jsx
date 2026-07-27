import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-xanteria-server');
}

export default function CustomXanteriaServerKeywordPage() {
  return <StaticKeywordPage slug="custom-xanteria-server" />;
}

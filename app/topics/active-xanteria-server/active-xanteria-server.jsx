import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-xanteria-server');
}

export default function ActiveXanteriaServerKeywordPage() {
  return <StaticKeywordPage slug="active-xanteria-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-launcher');
}

export default function AmeriaLauncherKeywordPage() {
  return <StaticKeywordPage slug="ameria-launcher" />;
}

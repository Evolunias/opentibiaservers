import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-brazil-server');
}

export default function ShadowcoresBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-brazil-server" />;
}

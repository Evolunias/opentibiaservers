import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-brazil-servers');
}

export default function ShadowcoresBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-brazil-servers" />;
}

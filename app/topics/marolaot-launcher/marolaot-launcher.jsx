import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-launcher');
}

export default function MarolaotLauncherKeywordPage() {
  return <StaticKeywordPage slug="marolaot-launcher" />;
}

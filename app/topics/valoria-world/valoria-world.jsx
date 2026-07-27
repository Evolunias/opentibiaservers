import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('valoria-world');
}

export default function ValoriaWorldKeywordPage() {
  return <StaticKeywordPage slug="valoria-world" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('valoria');
}

export default function ValoriaKeywordPage() {
  return <StaticKeywordPage slug="valoria" />;
}

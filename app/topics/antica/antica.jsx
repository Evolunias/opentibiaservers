import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('antica');
}

export default function AnticaKeywordPage() {
  return <StaticKeywordPage slug="antica" />;
}

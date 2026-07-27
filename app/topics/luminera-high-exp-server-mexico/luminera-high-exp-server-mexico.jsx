import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-high-exp-server-mexico');
}

export default function LumineraHighExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="luminera-high-exp-server-mexico" />;
}

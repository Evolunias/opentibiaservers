import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-high-exp-server-uk');
}

export default function LumineraHighExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="luminera-high-exp-server-uk" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-high-exp-server-usa');
}

export default function LumineraHighExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="luminera-high-exp-server-usa" />;
}

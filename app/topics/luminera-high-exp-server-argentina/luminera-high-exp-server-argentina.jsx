import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-high-exp-server-argentina');
}

export default function LumineraHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="luminera-high-exp-server-argentina" />;
}

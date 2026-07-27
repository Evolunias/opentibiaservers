import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-high-exp-server-germany');
}

export default function LumineraHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="luminera-high-exp-server-germany" />;
}

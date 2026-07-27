import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-high-exp-server-usa');
}

export default function RealestaHighExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="realesta-high-exp-server-usa" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-server-usa');
}

export default function HighExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-server-usa" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-servers-usa');
}

export default function HighExpServersUsaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-servers-usa" />;
}

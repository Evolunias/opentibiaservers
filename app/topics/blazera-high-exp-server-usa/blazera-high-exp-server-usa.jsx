import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-high-exp-server-usa');
}

export default function BlazeraHighExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="blazera-high-exp-server-usa" />;
}

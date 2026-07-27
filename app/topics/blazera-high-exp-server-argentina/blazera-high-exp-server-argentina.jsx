import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-high-exp-server-argentina');
}

export default function BlazeraHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="blazera-high-exp-server-argentina" />;
}

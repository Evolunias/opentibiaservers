import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-high-exp-server-mexico');
}

export default function BlazeraHighExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="blazera-high-exp-server-mexico" />;
}

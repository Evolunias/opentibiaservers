import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-low-exp-server-mexico');
}

export default function BlazeraLowExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="blazera-low-exp-server-mexico" />;
}

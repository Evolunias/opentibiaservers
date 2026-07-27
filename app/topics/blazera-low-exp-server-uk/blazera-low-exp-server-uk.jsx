import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-low-exp-server-uk');
}

export default function BlazeraLowExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="blazera-low-exp-server-uk" />;
}

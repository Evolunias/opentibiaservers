import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-low-exp-server-usa');
}

export default function BlazeraLowExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="blazera-low-exp-server-usa" />;
}

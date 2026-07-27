import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-low-exp-server-argentina');
}

export default function BlazeraLowExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="blazera-low-exp-server-argentina" />;
}

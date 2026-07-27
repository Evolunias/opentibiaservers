import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-low-exp-server-poland');
}

export default function OriginaltibiaLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-low-exp-server-poland" />;
}

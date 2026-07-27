import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-low-exp-server-germany');
}

export default function OriginaltibiaLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-low-exp-server-germany" />;
}

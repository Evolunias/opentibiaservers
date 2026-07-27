import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-high-exp-server-germany');
}

export default function OriginaltibiaHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-high-exp-server-germany" />;
}

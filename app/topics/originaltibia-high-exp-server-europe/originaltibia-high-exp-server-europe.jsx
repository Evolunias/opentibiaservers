import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-high-exp-server-europe');
}

export default function OriginaltibiaHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-high-exp-server-europe" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-low-exp-server-europe');
}

export default function OriginaltibiaLowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-low-exp-server-europe" />;
}

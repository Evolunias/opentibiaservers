import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-low-exp-server-europe');
}

export default function ElderaLowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="eldera-low-exp-server-europe" />;
}

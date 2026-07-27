import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-low-exp-server-europe');
}

export default function OlderaLowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="oldera-low-exp-server-europe" />;
}

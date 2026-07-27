import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-low-exp-server-germany');
}

export default function OlderaLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="oldera-low-exp-server-germany" />;
}

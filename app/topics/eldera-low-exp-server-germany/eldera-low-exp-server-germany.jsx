import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-low-exp-server-germany');
}

export default function ElderaLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="eldera-low-exp-server-germany" />;
}

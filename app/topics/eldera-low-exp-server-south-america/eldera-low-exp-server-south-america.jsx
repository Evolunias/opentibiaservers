import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-low-exp-server-south-america');
}

export default function ElderaLowExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-low-exp-server-south-america" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-low-exp-server-south-america');
}

export default function OlderaLowExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-low-exp-server-south-america" />;
}

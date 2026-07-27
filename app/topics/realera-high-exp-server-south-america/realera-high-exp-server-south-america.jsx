import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-high-exp-server-south-america');
}

export default function RealeraHighExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-high-exp-server-south-america" />;
}

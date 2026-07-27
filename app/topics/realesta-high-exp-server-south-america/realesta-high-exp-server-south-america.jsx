import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-high-exp-server-south-america');
}

export default function RealestaHighExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realesta-high-exp-server-south-america" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-server-south-america');
}

export default function HighExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-server-south-america" />;
}

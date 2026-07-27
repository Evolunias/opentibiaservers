import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-high-exp-server-south-america');
}

export default function OxygenotHighExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-high-exp-server-south-america" />;
}

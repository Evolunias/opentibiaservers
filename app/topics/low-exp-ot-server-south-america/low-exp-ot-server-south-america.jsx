import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-ot-server-south-america');
}

export default function LowExpOtServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-ot-server-south-america" />;
}

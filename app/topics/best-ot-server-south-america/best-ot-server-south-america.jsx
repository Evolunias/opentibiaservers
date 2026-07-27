import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ot-server-south-america');
}

export default function BestOtServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="best-ot-server-south-america" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ot-server-south-america');
}

export default function FreshStartOtServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ot-server-south-america" />;
}

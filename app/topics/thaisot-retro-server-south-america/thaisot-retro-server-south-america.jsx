import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-retro-server-south-america');
}

export default function ThaisotRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-retro-server-south-america" />;
}

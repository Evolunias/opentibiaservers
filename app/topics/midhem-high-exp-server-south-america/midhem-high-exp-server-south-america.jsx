import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-high-exp-server-south-america');
}

export default function MidhemHighExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-high-exp-server-south-america" />;
}

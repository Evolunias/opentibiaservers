import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-low-exp-server-south-america');
}

export default function MidhemLowExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-low-exp-server-south-america" />;
}

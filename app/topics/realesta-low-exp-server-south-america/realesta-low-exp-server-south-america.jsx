import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-low-exp-server-south-america');
}

export default function RealestaLowExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realesta-low-exp-server-south-america" />;
}

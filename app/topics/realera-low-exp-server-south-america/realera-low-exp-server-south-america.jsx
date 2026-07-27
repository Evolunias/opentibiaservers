import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-low-exp-server-south-america');
}

export default function RealeraLowExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-low-exp-server-south-america" />;
}

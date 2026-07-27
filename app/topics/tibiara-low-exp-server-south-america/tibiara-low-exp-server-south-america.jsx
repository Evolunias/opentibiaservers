import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-low-exp-server-south-america');
}

export default function TibiaraLowExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-low-exp-server-south-america" />;
}

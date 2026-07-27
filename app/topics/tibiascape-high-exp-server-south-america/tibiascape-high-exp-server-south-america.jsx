import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-high-exp-server-south-america');
}

export default function TibiascapeHighExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-high-exp-server-south-america" />;
}

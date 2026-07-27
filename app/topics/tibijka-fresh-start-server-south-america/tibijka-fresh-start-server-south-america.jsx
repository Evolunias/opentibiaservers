import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-fresh-start-server-south-america');
}

export default function TibijkaFreshStartServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-fresh-start-server-south-america" />;
}

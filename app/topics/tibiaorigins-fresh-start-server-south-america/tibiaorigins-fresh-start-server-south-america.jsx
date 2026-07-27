import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-fresh-start-server-south-america');
}

export default function TibiaoriginsFreshStartServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-fresh-start-server-south-america" />;
}

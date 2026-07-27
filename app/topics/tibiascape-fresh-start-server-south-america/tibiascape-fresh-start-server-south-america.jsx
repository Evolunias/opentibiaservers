import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-fresh-start-server-south-america');
}

export default function TibiascapeFreshStartServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-fresh-start-server-south-america" />;
}

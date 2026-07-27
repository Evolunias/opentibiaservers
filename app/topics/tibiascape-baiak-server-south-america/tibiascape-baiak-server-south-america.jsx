import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-baiak-server-south-america');
}

export default function TibiascapeBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-baiak-server-south-america" />;
}

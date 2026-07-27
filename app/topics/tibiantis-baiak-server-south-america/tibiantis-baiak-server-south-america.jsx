import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-baiak-server-south-america');
}

export default function TibiantisBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-baiak-server-south-america" />;
}

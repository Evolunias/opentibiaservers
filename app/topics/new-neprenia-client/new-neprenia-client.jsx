import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-neprenia-client');
}

export default function NewNepreniaClientKeywordPage() {
  return <StaticKeywordPage slug="new-neprenia-client" />;
}

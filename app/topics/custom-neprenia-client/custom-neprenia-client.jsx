import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-neprenia-client');
}

export default function CustomNepreniaClientKeywordPage() {
  return <StaticKeywordPage slug="custom-neprenia-client" />;
}

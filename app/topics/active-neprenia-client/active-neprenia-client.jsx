import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-neprenia-client');
}

export default function ActiveNepreniaClientKeywordPage() {
  return <StaticKeywordPage slug="active-neprenia-client" />;
}

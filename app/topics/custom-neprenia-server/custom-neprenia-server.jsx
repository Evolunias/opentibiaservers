import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-neprenia-server');
}

export default function CustomNepreniaServerKeywordPage() {
  return <StaticKeywordPage slug="custom-neprenia-server" />;
}

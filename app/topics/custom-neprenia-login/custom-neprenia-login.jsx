import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-neprenia-login');
}

export default function CustomNepreniaLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-neprenia-login" />;
}

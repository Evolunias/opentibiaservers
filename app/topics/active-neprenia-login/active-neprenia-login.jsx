import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-neprenia-login');
}

export default function ActiveNepreniaLoginKeywordPage() {
  return <StaticKeywordPage slug="active-neprenia-login" />;
}

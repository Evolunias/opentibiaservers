import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-neprenia-login');
}

export default function NewNepreniaLoginKeywordPage() {
  return <StaticKeywordPage slug="new-neprenia-login" />;
}

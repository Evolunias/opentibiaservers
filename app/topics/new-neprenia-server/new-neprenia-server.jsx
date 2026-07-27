import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-neprenia-server');
}

export default function NewNepreniaServerKeywordPage() {
  return <StaticKeywordPage slug="new-neprenia-server" />;
}

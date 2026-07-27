import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-neprenia-server');
}

export default function ActiveNepreniaServerKeywordPage() {
  return <StaticKeywordPage slug="active-neprenia-server" />;
}

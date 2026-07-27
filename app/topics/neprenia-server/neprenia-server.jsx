import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-server');
}

export default function NepreniaServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-server" />;
}

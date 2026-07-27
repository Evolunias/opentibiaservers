import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-usa-server');
}

export default function NepreniaUsaServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-usa-server" />;
}

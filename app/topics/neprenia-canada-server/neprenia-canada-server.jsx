import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-canada-server');
}

export default function NepreniaCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-canada-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-europe-server');
}

export default function NepreniaEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-europe-server" />;
}

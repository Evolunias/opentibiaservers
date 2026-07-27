import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-europe-servers');
}

export default function NepreniaEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="neprenia-europe-servers" />;
}

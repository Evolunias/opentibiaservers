import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-canada-servers');
}

export default function NepreniaCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="neprenia-canada-servers" />;
}

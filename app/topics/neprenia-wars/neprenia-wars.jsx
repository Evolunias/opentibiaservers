import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-wars');
}

export default function NepreniaWarsKeywordPage() {
  return <StaticKeywordPage slug="neprenia-wars" />;
}

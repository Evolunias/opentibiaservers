import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-website');
}

export default function NepreniaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="neprenia-website" />;
}

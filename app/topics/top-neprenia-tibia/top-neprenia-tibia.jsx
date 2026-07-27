import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-neprenia-tibia');
}

export default function TopNepreniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-neprenia-tibia" />;
}

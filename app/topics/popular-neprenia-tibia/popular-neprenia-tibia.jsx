import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-neprenia-tibia');
}

export default function PopularNepreniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-neprenia-tibia" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-neprenia-tibia');
}

export default function BestNepreniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-neprenia-tibia" />;
}

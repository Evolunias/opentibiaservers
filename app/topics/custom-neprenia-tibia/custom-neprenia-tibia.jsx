import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-neprenia-tibia');
}

export default function CustomNepreniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-neprenia-tibia" />;
}

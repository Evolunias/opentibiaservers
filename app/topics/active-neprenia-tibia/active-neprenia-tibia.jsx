import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-neprenia-tibia');
}

export default function ActiveNepreniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-neprenia-tibia" />;
}

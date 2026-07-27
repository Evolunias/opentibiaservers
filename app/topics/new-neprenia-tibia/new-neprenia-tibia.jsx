import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-neprenia-tibia');
}

export default function NewNepreniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-neprenia-tibia" />;
}

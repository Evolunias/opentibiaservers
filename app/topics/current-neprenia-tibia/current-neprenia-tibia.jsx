import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-neprenia-tibia');
}

export default function CurrentNepreniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-neprenia-tibia" />;
}

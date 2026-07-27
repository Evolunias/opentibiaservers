import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-neprenia-tibia');
}

export default function OfficialNepreniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-neprenia-tibia" />;
}

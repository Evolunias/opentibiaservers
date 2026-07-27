import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-alastera-tibia');
}

export default function OfficialAlasteraTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-alastera-tibia" />;
}

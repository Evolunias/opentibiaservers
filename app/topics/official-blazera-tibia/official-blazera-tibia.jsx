import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-blazera-tibia');
}

export default function OfficialBlazeraTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-blazera-tibia" />;
}

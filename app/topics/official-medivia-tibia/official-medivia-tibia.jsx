import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-medivia-tibia');
}

export default function OfficialMediviaTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-medivia-tibia" />;
}

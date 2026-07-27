import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-originaltibia-tibia');
}

export default function OfficialOriginaltibiaTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-originaltibia-tibia" />;
}

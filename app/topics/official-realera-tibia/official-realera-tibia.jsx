import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-realera-tibia');
}

export default function OfficialRealeraTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-realera-tibia" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-realesta-tibia');
}

export default function OfficialRealestaTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-realesta-tibia" />;
}

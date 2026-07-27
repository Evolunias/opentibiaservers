import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ameria-tibia');
}

export default function OfficialAmeriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-ameria-tibia" />;
}

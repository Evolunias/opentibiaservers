import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-xanteria-tibia');
}

export default function OfficialXanteriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-xanteria-tibia" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-sabrehaven-tibia');
}

export default function OfficialSabrehavenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-sabrehaven-tibia" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-sabrehaven-open-tibia');
}

export default function OfficialSabrehavenOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-sabrehaven-open-tibia" />;
}

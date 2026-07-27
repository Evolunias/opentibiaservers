import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-sabrehaven-open-tibia');
}

export default function CurrentSabrehavenOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-sabrehaven-open-tibia" />;
}

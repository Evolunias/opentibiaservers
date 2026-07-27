import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-sabrehaven-open-tibia');
}

export default function LowrateSabrehavenOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-sabrehaven-open-tibia" />;
}

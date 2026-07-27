import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-sabrehaven-open-tibia');
}

export default function CustomSabrehavenOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-sabrehaven-open-tibia" />;
}

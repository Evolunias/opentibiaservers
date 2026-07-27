import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-sabrehaven-open-tibia');
}

export default function ActiveSabrehavenOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-sabrehaven-open-tibia" />;
}

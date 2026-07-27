import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-sabrehaven-open-tibia');
}

export default function NewSabrehavenOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-sabrehaven-open-tibia" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-sabrehaven-tibia');
}

export default function NewSabrehavenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-sabrehaven-tibia" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-sabrehaven-tibia');
}

export default function CustomSabrehavenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-sabrehaven-tibia" />;
}

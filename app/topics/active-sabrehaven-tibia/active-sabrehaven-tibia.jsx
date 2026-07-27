import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-sabrehaven-tibia');
}

export default function ActiveSabrehavenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-sabrehaven-tibia" />;
}

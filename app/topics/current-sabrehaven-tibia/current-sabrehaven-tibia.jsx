import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-sabrehaven-tibia');
}

export default function CurrentSabrehavenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-sabrehaven-tibia" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-sabrehaven-tibia');
}

export default function FreshStartSabrehavenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-sabrehaven-tibia" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-sabrehaven-open-tibia');
}

export default function FreshStartSabrehavenOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-sabrehaven-open-tibia" />;
}

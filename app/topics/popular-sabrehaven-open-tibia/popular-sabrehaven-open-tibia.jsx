import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-sabrehaven-open-tibia');
}

export default function PopularSabrehavenOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-sabrehaven-open-tibia" />;
}

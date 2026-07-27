import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-sabrehaven-tibia');
}

export default function PopularSabrehavenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-sabrehaven-tibia" />;
}

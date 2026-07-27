import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-sabrehaven-open-tibia');
}

export default function TopSabrehavenOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-sabrehaven-open-tibia" />;
}

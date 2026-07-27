import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-sabrehaven-tibia');
}

export default function TopSabrehavenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-sabrehaven-tibia" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-sabrehaven-tibia');
}

export default function BestSabrehavenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-sabrehaven-tibia" />;
}

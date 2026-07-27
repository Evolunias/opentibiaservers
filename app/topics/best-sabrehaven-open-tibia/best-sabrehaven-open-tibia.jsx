import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-sabrehaven-open-tibia');
}

export default function BestSabrehavenOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-sabrehaven-open-tibia" />;
}

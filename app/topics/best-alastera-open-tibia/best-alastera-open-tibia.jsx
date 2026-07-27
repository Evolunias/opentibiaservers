import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-alastera-open-tibia');
}

export default function BestAlasteraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-alastera-open-tibia" />;
}

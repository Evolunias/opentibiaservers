import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-unline-open-tibia');
}

export default function FreshStartUnlineOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-unline-open-tibia" />;
}

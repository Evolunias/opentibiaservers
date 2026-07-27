import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-saintsot-tibia');
}

export default function BestSaintsotTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-saintsot-tibia" />;
}

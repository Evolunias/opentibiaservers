import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-saintsot-open-tibia');
}

export default function BestSaintsotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-saintsot-open-tibia" />;
}

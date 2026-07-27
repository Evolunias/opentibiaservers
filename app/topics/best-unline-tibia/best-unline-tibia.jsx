import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-unline-tibia');
}

export default function BestUnlineTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-unline-tibia" />;
}

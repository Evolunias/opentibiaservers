import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-unline-tibia');
}

export default function PopularUnlineTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-unline-tibia" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-unline-tibia');
}

export default function TopUnlineTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-unline-tibia" />;
}

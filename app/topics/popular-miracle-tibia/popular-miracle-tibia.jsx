import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-miracle-tibia');
}

export default function PopularMiracleTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-miracle-tibia" />;
}

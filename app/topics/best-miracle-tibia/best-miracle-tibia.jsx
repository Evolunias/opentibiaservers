import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-miracle-tibia');
}

export default function BestMiracleTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-miracle-tibia" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-miracle-tibia');
}

export default function FreshStartMiracleTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-miracle-tibia" />;
}

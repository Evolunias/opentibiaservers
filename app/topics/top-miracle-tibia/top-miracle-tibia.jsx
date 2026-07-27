import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-miracle-tibia');
}

export default function TopMiracleTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-miracle-tibia" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-miracle-tibia');
}

export default function LowrateMiracleTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-miracle-tibia" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-tibia');
}

export default function MiracleTibiaKeywordPage() {
  return <StaticKeywordPage slug="miracle-tibia" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-miracle-tibia');
}

export default function CustomMiracleTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-miracle-tibia" />;
}

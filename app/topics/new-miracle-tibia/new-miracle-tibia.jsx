import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-miracle-tibia');
}

export default function NewMiracleTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-miracle-tibia" />;
}

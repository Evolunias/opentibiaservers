import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-unline-tibia');
}

export default function FreshStartUnlineTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-unline-tibia" />;
}

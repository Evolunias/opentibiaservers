import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-imperianic-tibia');
}

export default function FreshStartImperianicTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-imperianic-tibia" />;
}

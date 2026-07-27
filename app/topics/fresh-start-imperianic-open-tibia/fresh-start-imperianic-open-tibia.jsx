import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-imperianic-open-tibia');
}

export default function FreshStartImperianicOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-imperianic-open-tibia" />;
}

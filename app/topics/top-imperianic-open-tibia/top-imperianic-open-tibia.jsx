import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-imperianic-open-tibia');
}

export default function TopImperianicOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-imperianic-open-tibia" />;
}

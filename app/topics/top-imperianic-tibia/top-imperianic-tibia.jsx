import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-imperianic-tibia');
}

export default function TopImperianicTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-imperianic-tibia" />;
}

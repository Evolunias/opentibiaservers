import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-imperianic-tibia');
}

export default function ActiveImperianicTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-imperianic-tibia" />;
}

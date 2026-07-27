import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-imperianic-open-tibia');
}

export default function ActiveImperianicOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-imperianic-open-tibia" />;
}

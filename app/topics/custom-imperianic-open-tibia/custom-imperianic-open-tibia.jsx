import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-imperianic-open-tibia');
}

export default function CustomImperianicOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-imperianic-open-tibia" />;
}

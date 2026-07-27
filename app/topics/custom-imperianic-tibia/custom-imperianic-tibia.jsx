import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-imperianic-tibia');
}

export default function CustomImperianicTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-imperianic-tibia" />;
}

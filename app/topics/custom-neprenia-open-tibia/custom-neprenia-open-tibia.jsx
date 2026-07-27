import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-neprenia-open-tibia');
}

export default function CustomNepreniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-neprenia-open-tibia" />;
}

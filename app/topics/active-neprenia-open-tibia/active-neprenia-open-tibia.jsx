import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-neprenia-open-tibia');
}

export default function ActiveNepreniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-neprenia-open-tibia" />;
}

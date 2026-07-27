import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-neprenia-open-tibia');
}

export default function NewNepreniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-neprenia-open-tibia" />;
}

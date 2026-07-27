import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-neprenia-open-tibia');
}

export default function FreshStartNepreniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-neprenia-open-tibia" />;
}

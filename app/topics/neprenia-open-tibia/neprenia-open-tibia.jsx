import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-open-tibia');
}

export default function NepreniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-open-tibia" />;
}

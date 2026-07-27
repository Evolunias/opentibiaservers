import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-kasteria-open-tibia');
}

export default function FreshStartKasteriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-kasteria-open-tibia" />;
}

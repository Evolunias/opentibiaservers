import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibianus-open-tibia');
}

export default function FreshStartTibianusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibianus-open-tibia" />;
}

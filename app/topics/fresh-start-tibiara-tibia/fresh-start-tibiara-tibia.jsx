import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiara-tibia');
}

export default function FreshStartTibiaraTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiara-tibia" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nostalther-open-tibia');
}

export default function FreshStartNostaltherOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nostalther-open-tibia" />;
}

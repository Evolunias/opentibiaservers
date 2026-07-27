import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nostalther-tibia');
}

export default function FreshStartNostaltherTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nostalther-tibia" />;
}

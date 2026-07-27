import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-classicus-tibia');
}

export default function FreshStartClassicusTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-classicus-tibia" />;
}

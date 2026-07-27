import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-classicus-open-tibia');
}

export default function FreshStartClassicusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-classicus-open-tibia" />;
}

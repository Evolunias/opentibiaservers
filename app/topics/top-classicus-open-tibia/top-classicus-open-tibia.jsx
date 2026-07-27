import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-classicus-open-tibia');
}

export default function TopClassicusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-classicus-open-tibia" />;
}

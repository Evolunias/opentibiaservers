import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-classicus-open-tibia');
}

export default function BestClassicusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-classicus-open-tibia" />;
}

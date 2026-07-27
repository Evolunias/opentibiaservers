import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-open-tibia');
}

export default function ClassicusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="classicus-open-tibia" />;
}

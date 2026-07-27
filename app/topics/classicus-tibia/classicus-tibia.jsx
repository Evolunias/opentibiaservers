import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-tibia');
}

export default function ClassicusTibiaKeywordPage() {
  return <StaticKeywordPage slug="classicus-tibia" />;
}

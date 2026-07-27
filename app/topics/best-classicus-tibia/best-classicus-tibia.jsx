import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-classicus-tibia');
}

export default function BestClassicusTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-classicus-tibia" />;
}

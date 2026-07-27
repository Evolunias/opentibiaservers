import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-classicus-tibia');
}

export default function NewClassicusTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-classicus-tibia" />;
}

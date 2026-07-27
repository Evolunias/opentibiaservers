import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-classicus-open-tibia');
}

export default function NewClassicusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-classicus-open-tibia" />;
}

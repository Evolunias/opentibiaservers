import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-carlinot-open-tibia');
}

export default function NewCarlinotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-carlinot-open-tibia" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-kasteria-open-tibia');
}

export default function NewKasteriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-kasteria-open-tibia" />;
}

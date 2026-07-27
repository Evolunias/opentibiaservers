import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibianus-open-tibia');
}

export default function NewTibianusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-tibianus-open-tibia" />;
}

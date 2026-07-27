import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-unline-open-tibia');
}

export default function NewUnlineOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-unline-open-tibia" />;
}

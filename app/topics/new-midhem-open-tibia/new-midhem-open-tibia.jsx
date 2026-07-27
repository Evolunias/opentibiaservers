import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-midhem-open-tibia');
}

export default function NewMidhemOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-midhem-open-tibia" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-midhem-tibia');
}

export default function NewMidhemTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-midhem-tibia" />;
}

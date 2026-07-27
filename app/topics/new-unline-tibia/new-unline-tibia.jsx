import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-unline-tibia');
}

export default function NewUnlineTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-unline-tibia" />;
}

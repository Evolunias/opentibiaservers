import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-tibia');
}

export default function MidhemTibiaKeywordPage() {
  return <StaticKeywordPage slug="midhem-tibia" />;
}

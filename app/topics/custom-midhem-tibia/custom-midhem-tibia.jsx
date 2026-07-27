import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-midhem-tibia');
}

export default function CustomMidhemTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-midhem-tibia" />;
}

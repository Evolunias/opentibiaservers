import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-midhem-open-tibia');
}

export default function CustomMidhemOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-midhem-open-tibia" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-open-tibia');
}

export default function MidhemOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="midhem-open-tibia" />;
}

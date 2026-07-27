import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-midhem-open-tibia');
}

export default function ActiveMidhemOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-midhem-open-tibia" />;
}

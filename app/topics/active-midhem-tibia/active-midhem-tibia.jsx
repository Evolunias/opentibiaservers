import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-midhem-tibia');
}

export default function ActiveMidhemTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-midhem-tibia" />;
}

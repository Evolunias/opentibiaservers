import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-unline-open-tibia');
}

export default function ActiveUnlineOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-unline-open-tibia" />;
}

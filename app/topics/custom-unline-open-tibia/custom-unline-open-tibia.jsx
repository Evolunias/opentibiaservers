import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-unline-open-tibia');
}

export default function CustomUnlineOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-unline-open-tibia" />;
}

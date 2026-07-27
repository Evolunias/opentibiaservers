import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-open-tibia');
}

export default function UnlineOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="unline-open-tibia" />;
}

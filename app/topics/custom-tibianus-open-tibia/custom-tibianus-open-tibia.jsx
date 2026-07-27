import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibianus-open-tibia');
}

export default function CustomTibianusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-tibianus-open-tibia" />;
}

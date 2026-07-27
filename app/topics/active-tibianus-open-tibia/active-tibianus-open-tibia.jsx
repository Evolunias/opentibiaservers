import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibianus-open-tibia');
}

export default function ActiveTibianusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-tibianus-open-tibia" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-open-tibia');
}

export default function TibianusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-open-tibia" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-yurots-open-tibia');
}

export default function CustomYurotsOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-yurots-open-tibia" />;
}

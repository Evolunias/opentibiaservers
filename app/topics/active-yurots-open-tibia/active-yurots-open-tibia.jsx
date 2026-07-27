import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-yurots-open-tibia');
}

export default function ActiveYurotsOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-yurots-open-tibia" />;
}

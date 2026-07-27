import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('iridia-open-tibia-alternatives');
}

export default function IridiaOpenTibiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="iridia-open-tibia-alternatives" />;
}

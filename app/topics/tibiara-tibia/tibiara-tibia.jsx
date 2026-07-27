import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-tibia');
}

export default function TibiaraTibiaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-tibia" />;
}

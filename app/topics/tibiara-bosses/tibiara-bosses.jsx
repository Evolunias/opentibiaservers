import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-bosses');
}

export default function TibiaraBossesKeywordPage() {
  return <StaticKeywordPage slug="tibiara-bosses" />;
}

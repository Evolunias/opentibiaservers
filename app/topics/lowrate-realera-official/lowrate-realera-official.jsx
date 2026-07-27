import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-realera-official');
}

export default function LowrateRealeraOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-realera-official" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-official');
}

export default function TibiaraOfficialKeywordPage() {
  return <StaticKeywordPage slug="tibiara-official" />;
}

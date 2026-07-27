import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiara');
}

export default function OfficialTibiaraKeywordPage() {
  return <StaticKeywordPage slug="official-tibiara" />;
}

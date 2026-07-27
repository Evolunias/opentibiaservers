import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiara-ots');
}

export default function OfficialTibiaraOtsKeywordPage() {
  return <StaticKeywordPage slug="official-tibiara-ots" />;
}

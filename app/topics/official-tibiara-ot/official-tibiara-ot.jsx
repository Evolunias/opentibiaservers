import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiara-ot');
}

export default function OfficialTibiaraOtKeywordPage() {
  return <StaticKeywordPage slug="official-tibiara-ot" />;
}

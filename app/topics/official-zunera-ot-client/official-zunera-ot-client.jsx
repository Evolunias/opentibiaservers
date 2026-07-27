import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-zunera-ot-client');
}

export default function OfficialZuneraOtClientKeywordPage() {
  return <StaticKeywordPage slug="official-zunera-ot-client" />;
}

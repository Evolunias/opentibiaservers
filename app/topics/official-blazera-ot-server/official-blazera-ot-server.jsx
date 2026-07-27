import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-blazera-ot-server');
}

export default function OfficialBlazeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-blazera-ot-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-blazera-server');
}

export default function OfficialBlazeraServerKeywordPage() {
  return <StaticKeywordPage slug="official-blazera-server" />;
}

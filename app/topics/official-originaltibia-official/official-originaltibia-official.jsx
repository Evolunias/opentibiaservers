import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-originaltibia-official');
}

export default function OfficialOriginaltibiaOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-originaltibia-official" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-official');
}

export default function OriginaltibiaOfficialKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-official" />;
}

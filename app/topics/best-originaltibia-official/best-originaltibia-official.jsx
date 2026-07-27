import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-originaltibia-official');
}

export default function BestOriginaltibiaOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-originaltibia-official" />;
}

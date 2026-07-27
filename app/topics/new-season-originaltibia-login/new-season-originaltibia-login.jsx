import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-originaltibia-login');
}

export default function NewSeasonOriginaltibiaLoginKeywordPage() {
  return <StaticKeywordPage slug="new-season-originaltibia-login" />;
}

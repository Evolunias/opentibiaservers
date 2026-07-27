import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-originaltibia-register');
}

export default function NewSeasonOriginaltibiaRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-originaltibia-register" />;
}

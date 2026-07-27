import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-miracle-register');
}

export default function NewSeasonMiracleRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-miracle-register" />;
}

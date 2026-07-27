import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-kasteria-register');
}

export default function NewSeasonKasteriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-kasteria-register" />;
}

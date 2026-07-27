import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nto-star-register');
}

export default function NewSeasonNtoStarRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-nto-star-register" />;
}

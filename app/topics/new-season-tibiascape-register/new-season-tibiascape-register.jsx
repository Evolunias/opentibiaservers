import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiascape-register');
}

export default function NewSeasonTibiascapeRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiascape-register" />;
}

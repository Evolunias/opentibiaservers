import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-classick-drakoria-register');
}

export default function NewSeasonClassickDrakoriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-classick-drakoria-register" />;
}

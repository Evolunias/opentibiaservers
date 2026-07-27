import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-thornia-register');
}

export default function NewSeasonThorniaRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-thornia-register" />;
}

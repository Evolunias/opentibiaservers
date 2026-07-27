import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-realera-register');
}

export default function NewSeasonRealeraRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-realera-register" />;
}

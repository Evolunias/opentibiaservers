import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-realesta-register');
}

export default function NewSeasonRealestaRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-realesta-register" />;
}

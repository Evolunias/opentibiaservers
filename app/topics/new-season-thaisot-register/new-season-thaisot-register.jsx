import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-thaisot-register');
}

export default function NewSeasonThaisotRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-thaisot-register" />;
}

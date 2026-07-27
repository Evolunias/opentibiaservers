import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nilot-register');
}

export default function NewSeasonNilotRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-nilot-register" />;
}

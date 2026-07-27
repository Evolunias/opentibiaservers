import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-oxygenot-register');
}

export default function NewSeasonOxygenotRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-oxygenot-register" />;
}

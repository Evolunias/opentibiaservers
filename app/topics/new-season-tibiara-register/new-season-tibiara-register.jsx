import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiara-register');
}

export default function NewSeasonTibiaraRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiara-register" />;
}

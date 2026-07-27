import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-blazera-register');
}

export default function NewSeasonBlazeraRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-blazera-register" />;
}

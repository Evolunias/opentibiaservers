import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-otmadness-register');
}

export default function NewSeasonOtmadnessRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-otmadness-register" />;
}

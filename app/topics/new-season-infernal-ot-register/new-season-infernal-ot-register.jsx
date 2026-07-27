import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-infernal-ot-register');
}

export default function NewSeasonInfernalOtRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-infernal-ot-register" />;
}

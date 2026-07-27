import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-infernal-ot-login');
}

export default function NewSeasonInfernalOtLoginKeywordPage() {
  return <StaticKeywordPage slug="new-season-infernal-ot-login" />;
}

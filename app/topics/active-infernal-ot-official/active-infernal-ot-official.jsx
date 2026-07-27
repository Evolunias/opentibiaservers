import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-infernal-ot-official');
}

export default function ActiveInfernalOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-infernal-ot-official" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-infernal-ot-official');
}

export default function NewInfernalOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-infernal-ot-official" />;
}

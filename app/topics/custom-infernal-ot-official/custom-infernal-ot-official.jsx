import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-infernal-ot-official');
}

export default function CustomInfernalOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-infernal-ot-official" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-official');
}

export default function InfernalOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-official" />;
}

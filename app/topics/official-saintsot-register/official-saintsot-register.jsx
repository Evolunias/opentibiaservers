import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-saintsot-register');
}

export default function OfficialSaintsotRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-saintsot-register" />;
}

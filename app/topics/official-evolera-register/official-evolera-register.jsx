import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-evolera-register');
}

export default function OfficialEvoleraRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-evolera-register" />;
}

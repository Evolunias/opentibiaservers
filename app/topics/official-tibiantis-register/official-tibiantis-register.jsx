import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiantis-register');
}

export default function OfficialTibiantisRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-tibiantis-register" />;
}

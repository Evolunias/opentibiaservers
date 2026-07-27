import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibianus-register');
}

export default function OfficialTibianusRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-tibianus-register" />;
}

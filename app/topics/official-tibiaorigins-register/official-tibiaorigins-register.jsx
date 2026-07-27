import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiaorigins-register');
}

export default function OfficialTibiaoriginsRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-tibiaorigins-register" />;
}

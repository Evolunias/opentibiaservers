import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiara-register');
}

export default function OfficialTibiaraRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-tibiara-register" />;
}

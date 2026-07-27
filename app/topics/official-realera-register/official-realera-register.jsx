import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-realera-register');
}

export default function OfficialRealeraRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-realera-register" />;
}

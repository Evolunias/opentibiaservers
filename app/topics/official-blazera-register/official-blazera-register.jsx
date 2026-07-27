import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-blazera-register');
}

export default function OfficialBlazeraRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-blazera-register" />;
}

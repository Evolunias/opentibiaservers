import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibijka-register');
}

export default function OfficialTibijkaRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-tibijka-register" />;
}

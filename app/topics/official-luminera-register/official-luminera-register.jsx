import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-luminera-register');
}

export default function OfficialLumineraRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-luminera-register" />;
}

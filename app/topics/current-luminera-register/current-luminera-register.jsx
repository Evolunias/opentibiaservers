import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-luminera-register');
}

export default function CurrentLumineraRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-luminera-register" />;
}

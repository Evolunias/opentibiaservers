import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-luminera-register');
}

export default function LowrateLumineraRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-luminera-register" />;
}

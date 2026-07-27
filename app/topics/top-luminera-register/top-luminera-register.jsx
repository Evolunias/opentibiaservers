import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-luminera-register');
}

export default function TopLumineraRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-luminera-register" />;
}

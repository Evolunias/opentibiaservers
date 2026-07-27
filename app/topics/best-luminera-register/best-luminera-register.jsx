import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-luminera-register');
}

export default function BestLumineraRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-luminera-register" />;
}

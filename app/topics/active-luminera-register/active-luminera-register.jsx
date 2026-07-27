import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-luminera-register');
}

export default function ActiveLumineraRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-luminera-register" />;
}

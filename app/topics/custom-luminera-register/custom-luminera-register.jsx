import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-luminera-register');
}

export default function CustomLumineraRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-luminera-register" />;
}

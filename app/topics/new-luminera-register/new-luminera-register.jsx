import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-luminera-register');
}

export default function NewLumineraRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-luminera-register" />;
}

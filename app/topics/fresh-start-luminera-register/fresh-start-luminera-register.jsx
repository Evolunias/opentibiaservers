import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-luminera-register');
}

export default function FreshStartLumineraRegisterKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-luminera-register" />;
}

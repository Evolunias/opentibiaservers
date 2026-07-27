import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-luminera-register');
}

export default function PopularLumineraRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-luminera-register" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-register');
}

export default function LumineraRegisterKeywordPage() {
  return <StaticKeywordPage slug="luminera-register" />;
}

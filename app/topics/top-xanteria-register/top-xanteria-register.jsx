import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-xanteria-register');
}

export default function TopXanteriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-xanteria-register" />;
}

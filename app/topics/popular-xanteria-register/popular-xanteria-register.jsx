import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-xanteria-register');
}

export default function PopularXanteriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-xanteria-register" />;
}

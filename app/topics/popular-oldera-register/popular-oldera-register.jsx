import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-oldera-register');
}

export default function PopularOlderaRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-oldera-register" />;
}

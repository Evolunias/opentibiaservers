import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-eldera-register');
}

export default function PopularElderaRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-eldera-register" />;
}

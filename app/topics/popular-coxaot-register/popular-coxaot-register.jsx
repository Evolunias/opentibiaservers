import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-coxaot-register');
}

export default function PopularCoxaotRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-coxaot-register" />;
}

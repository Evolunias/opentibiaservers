import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-oxygenot-register');
}

export default function PopularOxygenotRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-oxygenot-register" />;
}

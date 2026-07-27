import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiara-register');
}

export default function PopularTibiaraRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiara-register" />;
}

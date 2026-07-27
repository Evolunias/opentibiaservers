import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiara-register');
}

export default function BestTibiaraRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-tibiara-register" />;
}

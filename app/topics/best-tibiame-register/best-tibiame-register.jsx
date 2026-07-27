import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiame-register');
}

export default function BestTibiameRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-tibiame-register" />;
}

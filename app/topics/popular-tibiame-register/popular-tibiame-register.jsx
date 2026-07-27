import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiame-register');
}

export default function PopularTibiameRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiame-register" />;
}

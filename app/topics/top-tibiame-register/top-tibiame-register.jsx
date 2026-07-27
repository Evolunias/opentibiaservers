import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiame-register');
}

export default function TopTibiameRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-tibiame-register" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiame-register');
}

export default function LowrateTibiameRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiame-register" />;
}

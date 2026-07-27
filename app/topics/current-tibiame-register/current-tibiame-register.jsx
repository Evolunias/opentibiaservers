import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiame-register');
}

export default function CurrentTibiameRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-tibiame-register" />;
}

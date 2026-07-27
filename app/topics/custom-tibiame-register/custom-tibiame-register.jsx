import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiame-register');
}

export default function CustomTibiameRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiame-register" />;
}

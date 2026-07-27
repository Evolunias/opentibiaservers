import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiame-register');
}

export default function ActiveTibiameRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-tibiame-register" />;
}

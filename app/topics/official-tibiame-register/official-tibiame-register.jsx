import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiame-register');
}

export default function OfficialTibiameRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-tibiame-register" />;
}

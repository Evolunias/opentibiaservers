import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-register');
}

export default function TibiameRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibiame-register" />;
}

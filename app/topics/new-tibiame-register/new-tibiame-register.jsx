import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiame-register');
}

export default function NewTibiameRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-tibiame-register" />;
}

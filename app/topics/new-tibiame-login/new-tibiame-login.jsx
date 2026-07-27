import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiame-login');
}

export default function NewTibiameLoginKeywordPage() {
  return <StaticKeywordPage slug="new-tibiame-login" />;
}

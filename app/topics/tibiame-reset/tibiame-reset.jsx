import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-reset');
}

export default function TibiameResetKeywordPage() {
  return <StaticKeywordPage slug="tibiame-reset" />;
}

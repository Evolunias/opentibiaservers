import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiame-login');
}

export default function FreshStartTibiameLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiame-login" />;
}

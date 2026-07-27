import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiame-create-account');
}

export default function FreshStartTibiameCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiame-create-account" />;
}

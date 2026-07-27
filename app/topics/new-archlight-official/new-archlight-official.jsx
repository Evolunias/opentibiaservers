import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-archlight-official');
}

export default function NewArchlightOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-archlight-official" />;
}

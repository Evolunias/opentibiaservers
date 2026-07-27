import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-archlight-ot');
}

export default function OfficialArchlightOtKeywordPage() {
  return <StaticKeywordPage slug="official-archlight-ot" />;
}

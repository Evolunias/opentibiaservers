import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-archlight-tibia');
}

export default function OfficialArchlightTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-archlight-tibia" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-archlight-open-tibia');
}

export default function NewArchlightOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-archlight-open-tibia" />;
}

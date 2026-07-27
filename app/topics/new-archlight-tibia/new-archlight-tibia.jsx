import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-archlight-tibia');
}

export default function NewArchlightTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-archlight-tibia" />;
}

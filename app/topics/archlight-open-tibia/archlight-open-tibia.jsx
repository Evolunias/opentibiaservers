import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-open-tibia');
}

export default function ArchlightOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="archlight-open-tibia" />;
}

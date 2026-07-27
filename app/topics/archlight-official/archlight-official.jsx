import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-official');
}

export default function ArchlightOfficialKeywordPage() {
  return <StaticKeywordPage slug="archlight-official" />;
}

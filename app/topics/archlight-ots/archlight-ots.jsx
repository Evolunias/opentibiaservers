import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-ots');
}

export default function ArchlightOtsKeywordPage() {
  return <StaticKeywordPage slug="archlight-ots" />;
}

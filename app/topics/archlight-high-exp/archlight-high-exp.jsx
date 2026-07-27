import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-high-exp');
}

export default function ArchlightHighExpKeywordPage() {
  return <StaticKeywordPage slug="archlight-high-exp" />;
}

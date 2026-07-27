import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-server-old-school');
}

export default function BaiakServerOldSchoolKeywordPage() {
  return <StaticKeywordPage slug="baiak-server-old-school" />;
}

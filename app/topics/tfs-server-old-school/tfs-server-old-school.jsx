import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tfs-server-old-school');
}

export default function TfsServerOldSchoolKeywordPage() {
  return <StaticKeywordPage slug="tfs-server-old-school" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-server-list-old-school');
}

export default function OtServerListOldSchoolKeywordPage() {
  return <StaticKeywordPage slug="ot-server-list-old-school" />;
}

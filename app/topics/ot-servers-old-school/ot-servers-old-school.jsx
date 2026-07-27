import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-servers-old-school');
}

export default function OtServersOldSchoolKeywordPage() {
  return <StaticKeywordPage slug="ot-servers-old-school" />;
}

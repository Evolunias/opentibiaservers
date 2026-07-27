import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-old-school-server-sweden');
}

export default function ShadowcoresOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-old-school-server-sweden" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-old-school-server-latin-america');
}

export default function DuraOnlineOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-old-school-server-latin-america" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-9-6-old-school-server');
}

export default function DuraOnline96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-9-6-old-school-server" />;
}

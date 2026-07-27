import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-15-old-school-server');
}

export default function DuraOnline15OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-15-old-school-server" />;
}

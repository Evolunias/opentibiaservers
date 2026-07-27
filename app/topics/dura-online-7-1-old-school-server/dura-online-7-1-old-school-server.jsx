import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-7-1-old-school-server');
}

export default function DuraOnline71OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-7-1-old-school-server" />;
}

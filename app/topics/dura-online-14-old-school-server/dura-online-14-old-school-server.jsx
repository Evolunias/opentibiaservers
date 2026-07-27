import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-14-old-school-server');
}

export default function DuraOnline14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-14-old-school-server" />;
}

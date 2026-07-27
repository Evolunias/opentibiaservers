import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-8-1-old-school-server');
}

export default function DuraOnline81OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-8-1-old-school-server" />;
}

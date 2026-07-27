import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-7-4-old-school-server');
}

export default function DuraOnline74OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-7-4-old-school-server" />;
}

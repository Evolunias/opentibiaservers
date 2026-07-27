import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-11-old-school-server');
}

export default function DuraOnline11OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-11-old-school-server" />;
}

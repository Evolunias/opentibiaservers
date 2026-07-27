import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-10-0-old-school-server');
}

export default function DuraOnline100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-10-0-old-school-server" />;
}

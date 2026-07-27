import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-8-0-old-school-server');
}

export default function DuraOnline80OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-8-0-old-school-server" />;
}

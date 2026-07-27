import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-12-old-school-server');
}

export default function DuraOnline12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-12-old-school-server" />;
}

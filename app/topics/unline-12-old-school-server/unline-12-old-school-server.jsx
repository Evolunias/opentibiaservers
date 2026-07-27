import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-12-old-school-server');
}

export default function Unline12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="unline-12-old-school-server" />;
}

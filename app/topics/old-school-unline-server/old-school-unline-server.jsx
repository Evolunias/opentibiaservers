import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-unline-server');
}

export default function OldSchoolUnlineServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-unline-server" />;
}

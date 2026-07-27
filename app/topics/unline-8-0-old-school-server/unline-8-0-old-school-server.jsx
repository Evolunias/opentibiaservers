import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-8-0-old-school-server');
}

export default function Unline80OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="unline-8-0-old-school-server" />;
}

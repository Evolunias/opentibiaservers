import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-9-6-old-school-server');
}

export default function Nilot96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-9-6-old-school-server" />;
}

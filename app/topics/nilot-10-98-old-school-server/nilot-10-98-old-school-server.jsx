import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-10-98-old-school-server');
}

export default function Nilot1098OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-10-98-old-school-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-7-1-old-school-server');
}

export default function Nilot71OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-7-1-old-school-server" />;
}

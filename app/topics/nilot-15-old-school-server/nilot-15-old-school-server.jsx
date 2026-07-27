import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-15-old-school-server');
}

export default function Nilot15OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-15-old-school-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-14-old-school-server');
}

export default function Nilot14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-14-old-school-server" />;
}

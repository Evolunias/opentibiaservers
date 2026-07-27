import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-11-old-school-server');
}

export default function Nilot11OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-11-old-school-server" />;
}

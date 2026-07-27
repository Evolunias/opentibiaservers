import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-8-1-old-school-server');
}

export default function Nilot81OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-8-1-old-school-server" />;
}

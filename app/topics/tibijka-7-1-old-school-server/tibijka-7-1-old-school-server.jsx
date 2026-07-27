import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-1-old-school-server');
}

export default function Tibijka71OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-1-old-school-server" />;
}

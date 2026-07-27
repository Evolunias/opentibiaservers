import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-8-6-old-school-server');
}

export default function RookgaardTales86OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-8-6-old-school-server" />;
}

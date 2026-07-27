import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-7-1-old-school-server');
}

export default function RookgaardTales71OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-7-1-old-school-server" />;
}

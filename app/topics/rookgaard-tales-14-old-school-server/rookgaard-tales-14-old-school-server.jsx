import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-14-old-school-server');
}

export default function RookgaardTales14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-14-old-school-server" />;
}

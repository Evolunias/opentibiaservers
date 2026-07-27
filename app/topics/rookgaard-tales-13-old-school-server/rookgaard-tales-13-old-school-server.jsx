import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-13-old-school-server');
}

export default function RookgaardTales13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-13-old-school-server" />;
}

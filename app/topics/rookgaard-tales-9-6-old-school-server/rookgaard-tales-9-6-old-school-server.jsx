import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-9-6-old-school-server');
}

export default function RookgaardTales96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-9-6-old-school-server" />;
}

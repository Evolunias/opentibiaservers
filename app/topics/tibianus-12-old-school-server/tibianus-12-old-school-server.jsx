import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-12-old-school-server');
}

export default function Tibianus12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-12-old-school-server" />;
}

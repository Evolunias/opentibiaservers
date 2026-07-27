import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-8-0-old-school-server');
}

export default function Tibianus80OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-8-0-old-school-server" />;
}

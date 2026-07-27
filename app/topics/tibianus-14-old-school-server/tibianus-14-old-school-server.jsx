import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-14-old-school-server');
}

export default function Tibianus14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-14-old-school-server" />;
}

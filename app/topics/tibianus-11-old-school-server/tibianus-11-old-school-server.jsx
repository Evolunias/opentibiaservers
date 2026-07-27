import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-11-old-school-server');
}

export default function Tibianus11OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-11-old-school-server" />;
}

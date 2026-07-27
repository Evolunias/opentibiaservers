import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-10-0-old-school-server');
}

export default function Tibianus100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-10-0-old-school-server" />;
}

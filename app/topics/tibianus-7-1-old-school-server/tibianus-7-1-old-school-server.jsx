import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-7-1-old-school-server');
}

export default function Tibianus71OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-7-1-old-school-server" />;
}

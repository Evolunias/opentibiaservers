import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-7-72-old-school-server');
}

export default function Tibianus772OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-7-72-old-school-server" />;
}

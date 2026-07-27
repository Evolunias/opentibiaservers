import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-13-old-school-server');
}

export default function Tibianus13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-13-old-school-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-9-6-old-school-server');
}

export default function Tibianus96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-9-6-old-school-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-9-6-old-school-server');
}

export default function Imperianic96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-9-6-old-school-server" />;
}

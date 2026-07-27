import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-7-72-old-school-server');
}

export default function Imperianic772OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-7-72-old-school-server" />;
}

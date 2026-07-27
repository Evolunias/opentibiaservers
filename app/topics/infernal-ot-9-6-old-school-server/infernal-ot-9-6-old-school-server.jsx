import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-9-6-old-school-server');
}

export default function InfernalOt96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-9-6-old-school-server" />;
}

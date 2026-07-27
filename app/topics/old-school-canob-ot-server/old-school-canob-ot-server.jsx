import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-canob-ot-server');
}

export default function OldSchoolCanobOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-canob-ot-server" />;
}

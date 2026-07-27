import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-old-school-server-sweden');
}

export default function MistOfDeathOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-old-school-server-sweden" />;
}

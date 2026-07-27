import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-old-school-server-argentina');
}

export default function MistOfDeathOldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-old-school-server-argentina" />;
}

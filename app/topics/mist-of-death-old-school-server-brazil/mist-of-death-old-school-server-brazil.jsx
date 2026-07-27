import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-old-school-server-brazil');
}

export default function MistOfDeathOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-old-school-server-brazil" />;
}

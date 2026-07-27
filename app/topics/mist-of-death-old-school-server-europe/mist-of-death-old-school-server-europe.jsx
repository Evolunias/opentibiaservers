import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-old-school-server-europe');
}

export default function MistOfDeathOldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-old-school-server-europe" />;
}

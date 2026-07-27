import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-old-school-server-europe');
}

export default function OtmadnessOldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="otmadness-old-school-server-europe" />;
}

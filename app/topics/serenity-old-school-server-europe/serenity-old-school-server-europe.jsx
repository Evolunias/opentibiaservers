import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-old-school-server-europe');
}

export default function SerenityOldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="serenity-old-school-server-europe" />;
}

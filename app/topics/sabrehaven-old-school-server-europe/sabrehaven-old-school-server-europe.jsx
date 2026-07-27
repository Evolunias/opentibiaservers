import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-old-school-server-europe');
}

export default function SabrehavenOldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-old-school-server-europe" />;
}

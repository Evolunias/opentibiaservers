import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-old-school-server-europe');
}

export default function CyntaraOldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="cyntara-old-school-server-europe" />;
}

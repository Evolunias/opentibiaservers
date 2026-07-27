import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-old-school-server-poland');
}

export default function CyntaraOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="cyntara-old-school-server-poland" />;
}

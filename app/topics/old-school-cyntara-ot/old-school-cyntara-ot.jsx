import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-cyntara-ot');
}

export default function OldSchoolCyntaraOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-cyntara-ot" />;
}

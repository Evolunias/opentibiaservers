import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-cyntara-ots');
}

export default function OldSchoolCyntaraOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-cyntara-ots" />;
}

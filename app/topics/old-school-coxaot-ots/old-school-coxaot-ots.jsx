import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-coxaot-ots');
}

export default function OldSchoolCoxaotOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-coxaot-ots" />;
}

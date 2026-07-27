import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-coxaot-ot');
}

export default function OldSchoolCoxaotOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-coxaot-ot" />;
}

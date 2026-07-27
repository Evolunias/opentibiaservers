import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-coxaot-login');
}

export default function OldSchoolCoxaotLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-coxaot-login" />;
}

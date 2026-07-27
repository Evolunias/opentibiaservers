import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-coxaot');
}

export default function OldSchoolCoxaotKeywordPage() {
  return <StaticKeywordPage slug="old-school-coxaot" />;
}

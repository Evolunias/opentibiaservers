import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-coxaot-client');
}

export default function OldSchoolCoxaotClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-coxaot-client" />;
}

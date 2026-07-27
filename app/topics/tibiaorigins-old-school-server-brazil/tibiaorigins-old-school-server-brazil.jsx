import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-old-school-server-brazil');
}

export default function TibiaoriginsOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-old-school-server-brazil" />;
}

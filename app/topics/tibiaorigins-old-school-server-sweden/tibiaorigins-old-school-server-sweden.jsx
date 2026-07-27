import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-old-school-server-sweden');
}

export default function TibiaoriginsOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-old-school-server-sweden" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-servers-sweden');
}

export default function OldSchoolServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="old-school-servers-sweden" />;
}

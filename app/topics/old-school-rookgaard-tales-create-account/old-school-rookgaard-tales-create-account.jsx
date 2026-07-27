import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-rookgaard-tales-create-account');
}

export default function OldSchoolRookgaardTalesCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-rookgaard-tales-create-account" />;
}

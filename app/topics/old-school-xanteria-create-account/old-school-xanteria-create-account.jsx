import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-xanteria-create-account');
}

export default function OldSchoolXanteriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-xanteria-create-account" />;
}

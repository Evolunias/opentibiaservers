import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiaorigins');
}

export default function ActiveTibiaoriginsKeywordPage() {
  return <StaticKeywordPage slug="active-tibiaorigins" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiaorigins');
}

export default function CustomTibiaoriginsKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiaorigins" />;
}

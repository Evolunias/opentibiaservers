import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiaorigins');
}

export default function NewTibiaoriginsKeywordPage() {
  return <StaticKeywordPage slug="new-tibiaorigins" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiaorigins');
}

export default function LowrateTibiaoriginsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiaorigins" />;
}

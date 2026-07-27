import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins');
}

export default function TibiaoriginsKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins" />;
}

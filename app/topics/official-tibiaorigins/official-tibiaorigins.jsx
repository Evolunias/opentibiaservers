import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiaorigins');
}

export default function OfficialTibiaoriginsKeywordPage() {
  return <StaticKeywordPage slug="official-tibiaorigins" />;
}

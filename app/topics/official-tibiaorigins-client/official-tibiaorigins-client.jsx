import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiaorigins-client');
}

export default function OfficialTibiaoriginsClientKeywordPage() {
  return <StaticKeywordPage slug="official-tibiaorigins-client" />;
}

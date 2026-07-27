import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiaorigins-ots');
}

export default function OfficialTibiaoriginsOtsKeywordPage() {
  return <StaticKeywordPage slug="official-tibiaorigins-ots" />;
}

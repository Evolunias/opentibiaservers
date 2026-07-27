import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiaorigins-ot');
}

export default function OfficialTibiaoriginsOtKeywordPage() {
  return <StaticKeywordPage slug="official-tibiaorigins-ot" />;
}

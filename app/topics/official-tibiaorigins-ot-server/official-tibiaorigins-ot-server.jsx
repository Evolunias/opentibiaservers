import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiaorigins-ot-server');
}

export default function OfficialTibiaoriginsOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-tibiaorigins-ot-server" />;
}

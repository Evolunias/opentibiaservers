import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiaorigins-ot-server');
}

export default function ActiveTibiaoriginsOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-tibiaorigins-ot-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiaorigins-ot-server');
}

export default function CustomTibiaoriginsOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiaorigins-ot-server" />;
}

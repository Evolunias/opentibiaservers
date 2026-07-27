import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-ot-server');
}

export default function TibiaoriginsOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-ot-server" />;
}

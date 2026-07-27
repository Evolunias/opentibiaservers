import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-argentina-server');
}

export default function TibiaoriginsArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-argentina-server" />;
}

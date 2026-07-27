import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-argentina-servers');
}

export default function TibiaoriginsArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-argentina-servers" />;
}

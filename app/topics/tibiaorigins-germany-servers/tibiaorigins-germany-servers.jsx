import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-germany-servers');
}

export default function TibiaoriginsGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-germany-servers" />;
}

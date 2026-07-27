import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-chile-server');
}

export default function TibiaoriginsChileServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-chile-server" />;
}

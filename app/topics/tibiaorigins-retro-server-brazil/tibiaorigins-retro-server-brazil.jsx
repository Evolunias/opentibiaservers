import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-retro-server-brazil');
}

export default function TibiaoriginsRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-retro-server-brazil" />;
}

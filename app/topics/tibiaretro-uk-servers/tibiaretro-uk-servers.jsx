import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-uk-servers');
}

export default function TibiaretroUkServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-uk-servers" />;
}

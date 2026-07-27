import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-mexico-servers');
}

export default function GunzodusMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-mexico-servers" />;
}

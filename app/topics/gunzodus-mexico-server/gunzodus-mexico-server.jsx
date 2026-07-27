import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-mexico-server');
}

export default function GunzodusMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-mexico-server" />;
}

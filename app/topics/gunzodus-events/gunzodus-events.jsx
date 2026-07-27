import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-events');
}

export default function GunzodusEventsKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-events" />;
}

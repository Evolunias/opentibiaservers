import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-exp-rate');
}

export default function GunzodusExpRateKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-exp-rate" />;
}

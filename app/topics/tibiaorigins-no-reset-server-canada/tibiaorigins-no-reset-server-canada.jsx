import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-no-reset-server-canada');
}

export default function TibiaoriginsNoResetServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-no-reset-server-canada" />;
}

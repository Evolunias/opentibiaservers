import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-login');
}

export default function TibiaoriginsLoginKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-login" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-reset');
}

export default function TibiaoriginsResetKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-reset" />;
}

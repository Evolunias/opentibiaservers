import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-tibiaorigins-server');
}

export default function HighExpTibiaoriginsServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-tibiaorigins-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-tibiaorigins-server');
}

export default function LowExpTibiaoriginsServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-tibiaorigins-server" />;
}

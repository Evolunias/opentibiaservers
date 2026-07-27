import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-serenity-server');
}

export default function LowExpSerenityServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-serenity-server" />;
}

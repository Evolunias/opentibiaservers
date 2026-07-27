import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-serenity-server');
}

export default function HighExpSerenityServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-serenity-server" />;
}

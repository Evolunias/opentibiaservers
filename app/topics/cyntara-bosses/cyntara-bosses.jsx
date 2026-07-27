import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-bosses');
}

export default function CyntaraBossesKeywordPage() {
  return <StaticKeywordPage slug="cyntara-bosses" />;
}

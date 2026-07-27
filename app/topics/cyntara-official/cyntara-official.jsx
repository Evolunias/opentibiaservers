import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-official');
}

export default function CyntaraOfficialKeywordPage() {
  return <StaticKeywordPage slug="cyntara-official" />;
}

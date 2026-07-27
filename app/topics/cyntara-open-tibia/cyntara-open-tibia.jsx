import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-open-tibia');
}

export default function CyntaraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-open-tibia" />;
}

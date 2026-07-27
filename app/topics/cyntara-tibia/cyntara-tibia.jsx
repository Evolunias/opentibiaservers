import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-tibia');
}

export default function CyntaraTibiaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-tibia" />;
}

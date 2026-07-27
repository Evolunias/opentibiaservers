import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-ot');
}

export default function SabrehavenOtKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-ot" />;
}

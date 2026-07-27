import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-official');
}

export default function SabrehavenOfficialKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-official" />;
}

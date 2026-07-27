import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-luminera-official');
}

export default function CustomLumineraOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-luminera-official" />;
}

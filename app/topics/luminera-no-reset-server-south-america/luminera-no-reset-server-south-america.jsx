import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-no-reset-server-south-america');
}

export default function LumineraNoResetServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="luminera-no-reset-server-south-america" />;
}

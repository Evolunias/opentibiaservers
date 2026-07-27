import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-donations');
}

export default function TibiaretroDonationsKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-donations" />;
}

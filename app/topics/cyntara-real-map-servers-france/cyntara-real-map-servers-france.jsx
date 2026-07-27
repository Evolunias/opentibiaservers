import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-real-map-servers-france');
}

export default function CyntaraRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="cyntara-real-map-servers-france" />;
}

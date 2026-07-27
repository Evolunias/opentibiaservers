import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('minibia-tibia-7-6-in-your-browser-mobile-desktop');
}

export default function MinibiaTibia76InYourBrowserMobileDesktopPage() {
  return <StaticExactMatchPage slug="minibia-tibia-7-6-in-your-browser-mobile-desktop" />;
}

import OtchaosMobileDesktopServerReviewPage, { generateMetadata } from './otchaos-mobile-desktop';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtchaosMobileDesktopServerReviewPage />;
}

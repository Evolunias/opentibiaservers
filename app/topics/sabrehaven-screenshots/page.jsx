import SabrehavenScreenshotsKeywordPage, { generateMetadata } from './sabrehaven-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenScreenshotsKeywordPage />;
}

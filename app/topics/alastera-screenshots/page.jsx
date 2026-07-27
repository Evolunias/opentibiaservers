import AlasteraScreenshotsKeywordPage, { generateMetadata } from './alastera-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraScreenshotsKeywordPage />;
}

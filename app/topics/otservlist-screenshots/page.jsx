import OtservlistScreenshotsKeywordPage, { generateMetadata } from './otservlist-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtservlistScreenshotsKeywordPage />;
}

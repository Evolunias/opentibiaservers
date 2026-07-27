import TibianusScreenshotsKeywordPage, { generateMetadata } from './tibianus-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusScreenshotsKeywordPage />;
}

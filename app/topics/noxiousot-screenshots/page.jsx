import NoxiousotScreenshotsKeywordPage, { generateMetadata } from './noxiousot-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoxiousotScreenshotsKeywordPage />;
}

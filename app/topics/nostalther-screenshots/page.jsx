import NostaltherScreenshotsKeywordPage, { generateMetadata } from './nostalther-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherScreenshotsKeywordPage />;
}

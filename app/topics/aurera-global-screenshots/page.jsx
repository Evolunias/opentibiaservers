import AureraGlobalScreenshotsKeywordPage, { generateMetadata } from './aurera-global-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalScreenshotsKeywordPage />;
}

import CoxaotScreenshotsKeywordPage, { generateMetadata } from './coxaot-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotScreenshotsKeywordPage />;
}

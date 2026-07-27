import InfernalOtScreenshotsKeywordPage, { generateMetadata } from './infernal-ot-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOtScreenshotsKeywordPage />;
}

import EvoluniaScreenshotsKeywordPage, { generateMetadata } from './evolunia-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaScreenshotsKeywordPage />;
}

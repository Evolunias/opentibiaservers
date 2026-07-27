import BestEternalOdysseyKeywordPage, { generateMetadata } from './best-eternal-odyssey';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestEternalOdysseyKeywordPage />;
}

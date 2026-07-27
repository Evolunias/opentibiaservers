import TrashformersExpRateKeywordPage, { generateMetadata } from './trashformers-exp-rate';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersExpRateKeywordPage />;
}

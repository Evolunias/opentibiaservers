import TrashformersEuropeServerKeywordPage, { generateMetadata } from './trashformers-europe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersEuropeServerKeywordPage />;
}

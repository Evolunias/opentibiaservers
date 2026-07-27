import TrashformersCanadaServerKeywordPage, { generateMetadata } from './trashformers-canada-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersCanadaServerKeywordPage />;
}

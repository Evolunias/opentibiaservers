import TrashformersOfficialKeywordPage, { generateMetadata } from './trashformers-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersOfficialKeywordPage />;
}

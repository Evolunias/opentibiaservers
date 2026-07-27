import HighrateTrashformersServerKeywordPage, { generateMetadata } from './highrate-trashformers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTrashformersServerKeywordPage />;
}

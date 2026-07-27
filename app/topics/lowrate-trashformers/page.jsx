import LowrateTrashformersKeywordPage, { generateMetadata } from './lowrate-trashformers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTrashformersKeywordPage />;
}

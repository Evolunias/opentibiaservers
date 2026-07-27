import LowrateTrashformersServerKeywordPage, { generateMetadata } from './lowrate-trashformers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTrashformersServerKeywordPage />;
}

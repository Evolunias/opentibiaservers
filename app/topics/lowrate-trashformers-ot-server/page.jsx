import LowrateTrashformersOtServerKeywordPage, { generateMetadata } from './lowrate-trashformers-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTrashformersOtServerKeywordPage />;
}

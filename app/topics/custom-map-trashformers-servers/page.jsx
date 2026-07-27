import CustomMapTrashformersServersKeywordPage, { generateMetadata } from './custom-map-trashformers-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapTrashformersServersKeywordPage />;
}

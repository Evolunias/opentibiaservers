import OfficialTrashformersLoginKeywordPage, { generateMetadata } from './official-trashformers-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTrashformersLoginKeywordPage />;
}

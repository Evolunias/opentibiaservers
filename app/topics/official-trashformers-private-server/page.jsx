import OfficialTrashformersPrivateServerKeywordPage, { generateMetadata } from './official-trashformers-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTrashformersPrivateServerKeywordPage />;
}

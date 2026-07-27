import NonPvpTrashformersServerKeywordPage, { generateMetadata } from './non-pvp-trashformers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpTrashformersServerKeywordPage />;
}

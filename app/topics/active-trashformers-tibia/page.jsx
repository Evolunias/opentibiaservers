import ActiveTrashformersTibiaKeywordPage, { generateMetadata } from './active-trashformers-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTrashformersTibiaKeywordPage />;
}

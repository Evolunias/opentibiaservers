import ActiveTrashformersOpenTibiaKeywordPage, { generateMetadata } from './active-trashformers-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTrashformersOpenTibiaKeywordPage />;
}

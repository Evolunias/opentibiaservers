import PvpEnforcedTrashformersServerKeywordPage, { generateMetadata } from './pvp-enforced-trashformers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedTrashformersServerKeywordPage />;
}

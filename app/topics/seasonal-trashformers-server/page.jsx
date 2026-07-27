import SeasonalTrashformersServerKeywordPage, { generateMetadata } from './seasonal-trashformers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalTrashformersServerKeywordPage />;
}

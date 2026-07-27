import TrashformersSeasonalServerFranceKeywordPage, { generateMetadata } from './trashformers-seasonal-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersSeasonalServerFranceKeywordPage />;
}

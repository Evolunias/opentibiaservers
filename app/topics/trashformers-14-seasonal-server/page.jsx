import Trashformers14SeasonalServerKeywordPage, { generateMetadata } from './trashformers-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Trashformers14SeasonalServerKeywordPage />;
}

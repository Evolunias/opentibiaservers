import Trashformers13SeasonalServerKeywordPage, { generateMetadata } from './trashformers-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Trashformers13SeasonalServerKeywordPage />;
}

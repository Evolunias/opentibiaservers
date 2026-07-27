import Trashformers12SeasonalServerKeywordPage, { generateMetadata } from './trashformers-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Trashformers12SeasonalServerKeywordPage />;
}

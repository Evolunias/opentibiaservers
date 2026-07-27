import Trashformers11SeasonalServerKeywordPage, { generateMetadata } from './trashformers-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Trashformers11SeasonalServerKeywordPage />;
}

import Trashformers96SeasonalServerKeywordPage, { generateMetadata } from './trashformers-9-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Trashformers96SeasonalServerKeywordPage />;
}

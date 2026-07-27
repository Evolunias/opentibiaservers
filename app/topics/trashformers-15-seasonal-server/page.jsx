import Trashformers15SeasonalServerKeywordPage, { generateMetadata } from './trashformers-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Trashformers15SeasonalServerKeywordPage />;
}

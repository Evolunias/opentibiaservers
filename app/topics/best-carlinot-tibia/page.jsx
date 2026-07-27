import BestCarlinotTibiaKeywordPage, { generateMetadata } from './best-carlinot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCarlinotTibiaKeywordPage />;
}

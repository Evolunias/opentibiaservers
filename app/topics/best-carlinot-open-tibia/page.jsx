import BestCarlinotOpenTibiaKeywordPage, { generateMetadata } from './best-carlinot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCarlinotOpenTibiaKeywordPage />;
}

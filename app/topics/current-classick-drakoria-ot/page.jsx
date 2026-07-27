import CurrentClassickDrakoriaOtKeywordPage, { generateMetadata } from './current-classick-drakoria-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentClassickDrakoriaOtKeywordPage />;
}

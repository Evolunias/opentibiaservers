import ActiveClassickDrakoriaOtKeywordPage, { generateMetadata } from './active-classick-drakoria-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveClassickDrakoriaOtKeywordPage />;
}

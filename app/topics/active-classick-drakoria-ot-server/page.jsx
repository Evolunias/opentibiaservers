import ActiveClassickDrakoriaOtServerKeywordPage, { generateMetadata } from './active-classick-drakoria-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveClassickDrakoriaOtServerKeywordPage />;
}

import TopBlazeraOtServerKeywordPage, { generateMetadata } from './top-blazera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopBlazeraOtServerKeywordPage />;
}

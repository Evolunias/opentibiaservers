import FreshStartBlazeraOtServerKeywordPage, { generateMetadata } from './fresh-start-blazera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartBlazeraOtServerKeywordPage />;
}

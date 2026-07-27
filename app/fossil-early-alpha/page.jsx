import FossilEarlyAlphaPage, { generateMetadata } from './fossil-early-alpha';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FossilEarlyAlphaPage />;
}

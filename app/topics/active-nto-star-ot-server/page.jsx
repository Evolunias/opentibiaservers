import ActiveNtoStarOtServerKeywordPage, { generateMetadata } from './active-nto-star-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNtoStarOtServerKeywordPage />;
}

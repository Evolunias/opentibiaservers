import ActiveTibijkaOtServerKeywordPage, { generateMetadata } from './active-tibijka-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibijkaOtServerKeywordPage />;
}

import ActiveTibijkaOtKeywordPage, { generateMetadata } from './active-tibijka-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibijkaOtKeywordPage />;
}

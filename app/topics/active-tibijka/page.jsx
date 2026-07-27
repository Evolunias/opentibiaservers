import ActiveTibijkaKeywordPage, { generateMetadata } from './active-tibijka';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibijkaKeywordPage />;
}

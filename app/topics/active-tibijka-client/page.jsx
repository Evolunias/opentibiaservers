import ActiveTibijkaClientKeywordPage, { generateMetadata } from './active-tibijka-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibijkaClientKeywordPage />;
}

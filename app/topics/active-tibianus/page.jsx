import ActiveTibianusKeywordPage, { generateMetadata } from './active-tibianus';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibianusKeywordPage />;
}

import ActiveTibianusClientKeywordPage, { generateMetadata } from './active-tibianus-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibianusClientKeywordPage />;
}

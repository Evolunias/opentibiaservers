import ActiveImperianicOtsKeywordPage, { generateMetadata } from './active-imperianic-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveImperianicOtsKeywordPage />;
}

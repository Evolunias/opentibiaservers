import ActiveRealestaOtsKeywordPage, { generateMetadata } from './active-realesta-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRealestaOtsKeywordPage />;
}

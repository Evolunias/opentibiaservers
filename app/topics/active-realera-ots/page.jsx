import ActiveRealeraOtsKeywordPage, { generateMetadata } from './active-realera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRealeraOtsKeywordPage />;
}

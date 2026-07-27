import WithActivePlayersBlazeraServerKeywordPage, { generateMetadata } from './with-active-players-blazera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersBlazeraServerKeywordPage />;
}

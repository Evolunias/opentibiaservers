import NewImperianicServerKeywordPage, { generateMetadata } from './new-imperianic-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewImperianicServerKeywordPage />;
}

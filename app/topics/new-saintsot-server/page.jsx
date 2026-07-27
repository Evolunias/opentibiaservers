import NewSaintsotServerKeywordPage, { generateMetadata } from './new-saintsot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSaintsotServerKeywordPage />;
}

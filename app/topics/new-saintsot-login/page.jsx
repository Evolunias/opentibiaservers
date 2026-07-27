import NewSaintsotLoginKeywordPage, { generateMetadata } from './new-saintsot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSaintsotLoginKeywordPage />;
}

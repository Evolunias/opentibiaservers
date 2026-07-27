import NewTibiascapeOfficialKeywordPage, { generateMetadata } from './new-tibiascape-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiascapeOfficialKeywordPage />;
}

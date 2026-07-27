import NewTibiascapeOtServerKeywordPage, { generateMetadata } from './new-tibiascape-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiascapeOtServerKeywordPage />;
}
